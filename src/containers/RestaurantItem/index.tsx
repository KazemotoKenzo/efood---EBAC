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
  _title: string
  _category: string
  _description: string
  _image: string
  _rating: number
}

const RestaurantItem = ({
  _title,
  _category,
  _description,
  _image,
  _rating
}: Props) => (
  <>
    <Card>
      <Image src={_image} alt={_title} />
      <Categories>
        <Category>Destaque da semana</Category>
        <Category>{_category}</Category>
      </Categories>
    </Card>
    <Tag>
      <Space>
        <h3>{_title}</h3>
        <Rating>
          <h3>{_rating}</h3>
          <Star className="bi bi-star-fill"></Star>
        </Rating>
      </Space>
      <p>{_description}</p>
      <MoreLink to="/perfil">Saiba Mais</MoreLink>
    </Tag>
  </>
)

export default RestaurantItem
