import React, { useState } from 'react';
import NavbarComp from '../components/Navbar/NavbarComp';
import { createProgrammableNft } from '@metaplex-foundation/mpl-token-metadata';
import {
  createGenericFile,
  generateSigner,
  percentAmount,
  signerIdentity,
  sol,
} from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { base58 } from '@metaplex-foundation/umi/serializers';

const CreateNFT = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const createNft = async () => {
    try {
      const { name, description, file } = formData;

      if (!name || !description || !file) {
        alert('Please fill in all fields.');
        return;
      }

      // Create UMI instance with the Solana RPC URL
      const umi = createUmi('https://rpc.devnet.soo.network/rpc').use(
        signerIdentity(generateSigner(umi))
      );

      console.log('Airdropping 1 SOL to identity...');
      await umi.rpc.airdrop(umi.identity.publicKey, sol(1));

      // Upload Image
      console.log('Uploading image...');
      const imageFile = createGenericFile(file, file.name, {
        tags: [{ name: 'Content-Type', value: file.type }],
      });
      const imageUri = await umi.uploader.upload([imageFile]);

      // Upload Metadata
      console.log('Uploading metadata...');
      const metadata = {
        name,
        description,
        image: imageUri[0], // Image URI uploaded
        external_url: 'https://example.com', // You can replace this with the actual URL of your NFT
        attributes: [
          { trait_type: 'Creator', value: 'User' },
          { trait_type: 'Platform', value: 'Solana' },
        ],
      };
      const metadataUri = await umi.uploader.uploadJson(metadata);

      // Create NFT
      console.log('Creating NFT...');
      const nftSigner = generateSigner(umi);
      const tx = await createProgrammableNft(umi, {
        mint: nftSigner,
        sellerFeeBasisPoints: percentAmount(5), // Seller fee is 5%
        name,
        uri: metadataUri,
      }).sendAndConfirm(umi);

      const signature = base58.deserialize(tx.signature)[0];
      console.log(`NFT Created: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
      alert('NFT created successfully!');
    } catch (error) {
      console.error('Error creating NFT:', error);
      alert('Failed to create NFT.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <NavbarComp />
      <div className="flex items-center justify-center mt-10">
        <div className="max-w-md w-full bg-black shadow-lg border border-gray-800 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-white mb-10 text-center">Create Your NFT</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createNft();
            }}
            className="space-y-6"
          >
            {/* Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Upload Your NFT</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-700 file:bg-gray-800 file:text-white hover:file:bg-gray-700"
              />
              <p className="text-sm text-gray-400 mt-1">
                {formData.file ? `Selected: ${formData.file.name}` : 'No file chosen'}
              </p>
            </div>

            {/* NFT Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">NFT Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the name of your NFT"
                className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* NFT Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">NFT Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a brief description of your NFT"
                className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price (in Solana)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price in SOL"
                className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 via-purple-800 to-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Create NFT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
