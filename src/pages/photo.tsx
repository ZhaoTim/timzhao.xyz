import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation';
import Image, { StaticImageData } from 'next/image';
import { Container } from '../components/container';

const Photo = () => {
  return (
    <Layout>
      <Navigation />
      <Container>
        <div className="relative grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image alt="Mountains" src="/assets/summer.jpg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image alt="Mountains" src="/assets/night_moto.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};
//

export default Photo;
