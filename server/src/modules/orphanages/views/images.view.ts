import Image from '../infra/typeorm/entities/Image';

interface IImagesView {
  id: number;
  url: string;
}

export default {
  render(image: Image): IImagesView {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): IImagesView[] {
    return images.map(image => this.render(image));
  },
};
