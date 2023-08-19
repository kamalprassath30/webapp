// Sample data for file list (replace with actual data)
const files = [
    { name: 'Document 1', size: '100KB' },
    { name: 'Image 1', size: '2MB' },
    // Add more files here...
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const fileListElement = document.querySelector('.file-list');
    const uploadButton = document.getElementById('upload-button');
    const fileInput = document.getElementById('file-input');
  
    // Function to display files in the file list
    function displayFiles() {
      fileListElement.innerHTML = '';
      files.forEach((file) => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.innerHTML = `
          <span>${file.name}</span>
          <span>${file.size}</span>
        `;
        fileListElement.appendChild(fileItem);
      });
    }
  
    // Trigger file upload when the "Upload" button is clicked
    uploadButton.addEventListener('click', () => {
      fileInput.click();
    });
  
    // Handle file selection
    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
      // You can now upload the selected file to the server using AJAX or other methods.
      // Handle the file upload on the backend and update the 'files' array with the new file data.
      // After successful upload, call displayFiles() to refresh the file list.
    });
  
    // Initial display of files
    displayFiles();
  });
  