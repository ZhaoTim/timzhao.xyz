import { Layout } from '../components/layout';
import { Navigation } from '../components/navigation';
import Image, { StaticImageData } from 'next/image';
import { Container } from '../components/container';
import summer from '../../public/assets/summer.jpg';
import nightMoto from '../../public/assets/night_moto.jpg';
import changcheng from '../../public/assets/changcheng.jpeg';
import moto from '../../public/assets/moto.jpeg';

const Photo = () => {
  return (
    <Layout>
      <Navigation />
      <Container>
        <div className="relative grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image
              placeholder="blur"
              alt="Mountains"
              src={summer}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image
              alt="Mountains"
              placeholder="blur"
              src={nightMoto}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image
              placeholder="blur"
              alt="Mountains"
              src={changcheng}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg ">
            <Image placeholder="blur" alt="Mountains" src={moto} layout="fill" objectFit="cover" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};
//

export default Photo;
