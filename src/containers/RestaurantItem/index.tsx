import {
  Categories,
  Category,
  MoreLink,
  Rating,
  Space,
  Star,
  Tag,
  Card,
  Image
} from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
  rating: number
}

const RestaurantItem = ({
  title,
  category,
  description,
  image,
  rating
}: Props) => (
  <>
    <Card>
      <Image src={image} alt={title} />
      <Categories>
        <Category>Destaque da semana</Category>
        <Category>{category}</Category>
      </Categories>
    </Card>
    <Tag>
      <Space>
        <h3>{title}</h3>
        <Rating>
          <h3>{rating}</h3>
          <Star className="bi bi-star-fill"></Star>
        </Rating>
      </Space>
      <p>{description}</p>
      <MoreLink to="/perfil">Saiba Mais</MoreLink>
    </Tag>
  </>
)

export default RestaurantItem
