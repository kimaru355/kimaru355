const populate = async () => {
  await fetch('http://localhost:3000/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error populating projects: ' + response.statusText);
      }
      console.log('Projects populated successfully');
    })
    .catch((error) => {
      console.error('Failed to populate projects:', error);
    });
};

populate();
