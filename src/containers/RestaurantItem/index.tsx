import {
  Categories,
  Category,
  MoreLink,
  Rating,
  Space,
  Star,
  DescriptionRes,
  ContainerRes,
  Card,
  Image
} from './styles'

type Props = {
  id: number
  title: string
  category: string
  description: string
  image: string
  rating: number
}

const RestaurantItem = ({
  id,
  title,
  category,
  description,
  image,
  rating
}: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 243) {
      return d.slice(0, 243) + '...'
    } else {
      return d
    }
  }

  return (
    <Card>
      <Categories>
        <Category>{category}</Category>
      </Categories>
      <Image src={image} alt={title} />
      <ContainerRes>
        <Space>
          <h3>{title}</h3>
          <Rating>
            <h3>{rating}</h3>
            <Star className="bi bi-star-fill"></Star>
          </Rating>
        </Space>
        <DescriptionRes>{getDescription(description)}</DescriptionRes>
        <MoreLink to={`/perfil/${id}`}>Saiba Mais</MoreLink>
      </ContainerRes>
    </Card>
  )
}

export default RestaurantItem
