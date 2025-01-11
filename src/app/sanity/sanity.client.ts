import sanityClient from '@sanity/client';

 const client = sanityClient({
  projectId: 'w4oh94pm',
  dataset: 'production', 
  useCdn: true, 
});

export default client;
