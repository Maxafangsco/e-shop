import styled from "@emotion/styled"
import ProductItems from "./ProductItems"
import { popularProducts } from "../data"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
       {popularProducts.map((item) =>{
          return   <ProductItems item={item}  key={item.id}/>
       })}
     
    </Container>
  )
}

export default Products