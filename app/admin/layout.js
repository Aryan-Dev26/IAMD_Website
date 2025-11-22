export const metadata = {
  title: 'IAMD Admin Panel',
  description: 'Content Management System',
};

export default function AdminLayout({ children }) {
  // Return children without header/footer
  return <>{children}</>;
}
