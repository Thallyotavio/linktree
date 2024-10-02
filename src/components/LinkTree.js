import React, { useState, useEffect } from 'react';

const LinkTree = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('<http://localhost:5000/api/links>')
      .then(response => response.json())
      .then(data => setLinks(data));
  }, []);

  return (
    <div className="linktree-container">
      <h1>Meus Links</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkTree;
