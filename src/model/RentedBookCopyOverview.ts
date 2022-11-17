interface RentedBookCopyOverview {
  author: string;
  cancelRentDate: string;
  endRentDate: string;
  id: number | string;
  identifier: string;
  startRentDate: string;
  title: string;
  userEmail: string;
}

export default RentedBookCopyOverview;
