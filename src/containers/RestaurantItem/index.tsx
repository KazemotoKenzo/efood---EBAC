import {
  Categories,
  Category,
  MoreLink,
  Rating,
  Space,
  Star,
  Tag,
  Image
} from './styles'

const RestaurantItem = () => (
  <>
    <Image>
      <Categories>
        <Category>Destaque da semana</Category>
        <Category>Japonesa</Category>
      </Categories>
    </Image>
    <Tag>
      <Space>
        <h3>Hioki Sushi</h3>
        <Rating>
          <h3>4.9</h3>
          <Star className="bi bi-star-fill"></Star>
        </Rating>
      </Space>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laborum
        cum, ipsam excepturi nam, quisquam quia quibusdam in quasi optio error
        alias, sunt inventore soluta id. Expedita dicta voluptatum dolore!
      </p>
      <MoreLink to="/perfil">Saiba Mais</MoreLink>
    </Tag>
  </>
)

export default RestaurantItem
