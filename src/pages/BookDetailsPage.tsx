import BookDetails from 'components/BookDetails/BookDetails';
import StandardLayout from 'components/Layout/StandardLayout';
import React from 'react';

const BookDetailsPage: React.FC = () => {
  return (
    <StandardLayout>
      <BookDetails />
    </StandardLayout>
  );
};

export default BookDetailsPage;
