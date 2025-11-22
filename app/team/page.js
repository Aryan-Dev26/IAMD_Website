import OurTeam from '@/components/home/OurTeam';

export const metadata = {
  title: 'Our Team - IAMD',
  description: 'Meet the dedicated professionals behind IAMD who are committed to providing exceptional care and support to MD warriors.',
};

export default function TeamPage() {
  return (
    <div className="pt-20">
      <OurTeam />
    </div>
  );
}
