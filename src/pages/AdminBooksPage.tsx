import React from 'react';
import Books from 'components/Book/Books';
import StandardLayout from 'components/Layout/StandardLayout';

const AdminBooksPage = () => {
  return (
    <StandardLayout>
      <Books />
    </StandardLayout>
  );
};

export default AdminBooksPage;
