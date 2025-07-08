(function() {
// Create the container element
const box = document.createElement('div');
box.style.position = 'fixed'; // changed from 'absolute' to 'fixed'
box.style.bottom = '10px';
box.style.left = '10px';
box.style.padding = '12px 16px';
box.style.backgroundColor = '#f9f9f9';
box.style.borderRadius = '10px';
box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
box.style.fontFamily = 'sans-serif';
box.style.fontSize = '14px';
box.style.color = '#333';
box.style.zIndex = '1000';

// Add text
const message = document.createElement('div');
message.textContent = 'Super Cool Storefront Support';
box.appendChild(message);

// Create the button
const chatButton = document.createElement('button');
chatButton.textContent = 'Chat';

// Style the button
chatButton.style.marginTop = '8px';
chatButton.style.padding = '6px 12px';
chatButton.style.border = 'none';
chatButton.style.borderRadius = '6px';
chatButton.style.backgroundColor = '#007bff';
chatButton.style.color = 'white';
chatButton.style.cursor = 'pointer';
chatButton.style.fontSize = '14px';
chatButton.style.fontWeight = 'bold';
chatButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

// Add hover effect
chatButton.addEventListener('mouseenter', () => {
  chatButton.style.backgroundColor = '#0056b3';
});
chatButton.addEventListener('mouseleave', () => {
  chatButton.style.backgroundColor = '#007bff';
});

// Append the button
box.appendChild(chatButton);

// Append the box to the document
document.body.appendChild(box);
})();