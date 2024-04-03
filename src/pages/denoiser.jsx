import React, { useState } from 'react';

function Denoiser() {
  const [originalImage, setOriginalImage] = useState('');
  const [denoisedImage, setDenoisedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showParamsModal, setShowParamsModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleImageUpload = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setOriginalImage(imageUrl);
      setSelectedOption('');
      setShowParamsModal(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartDenoising = () => {
    setShowParamsModal(false);
    setLoading(true);

    // Simulate denoising process based on selected option
    // Replace this with actual denoising logic
    setTimeout(() => {
      // For now, just use the original image as the denoised image
      setDenoisedImage(originalImage);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
    <header className="header">
        <h1 className="title">Image Denoiser</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </header>
      <main className="main">
        <div className="image-container">
          {loading && <p className="loading">Denoising image...</p>}
          {originalImage && (
            <div>
              <h2 className="image-header">Original Image</h2>
              <img className="image" src={originalImage} alt="Original" />
            </div>
          )}
          {denoisedImage && (
            <div>
              <h2 className="image-header">Denoised Image</h2>
              <img className="image" src={denoisedImage} alt="Denoised" />
            </div>
          )}
        </div>
      </main>
      {showParamsModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowParamsModal(false)}>
              &times;
            </span>

            {/* Select Parameters */}
            <h2>Select Denoising Mode</h2>
            <div className="radio-container">
              <label>
                <input
                  type="radio"
                  value="speed"
                  checked={selectedOption === 'speed'}
                  onChange={handleOptionChange}
                />
                Fast (Lower Quality)
              </label>
              <label>
                <input
                  type="radio"
                  value="quality"
                  checked={selectedOption === 'quality'}
                  onChange={handleOptionChange}
                />
                High Quality (Slower)
              </label>
            </div>
            <button onClick={handleStartDenoising}>Start Denoising</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Denoiser;