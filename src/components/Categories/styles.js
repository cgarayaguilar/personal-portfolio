import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 40px;
  overflow: auto;
  scroll-behavior: smooth;
  margin-top: 4px;
  margin-bottom: 16px;
`

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const Category = styled.a`
  margin-right: 16px;
  font-style: normal;
  font-family: 'Public Sans', sans-serif;
  font-weight: normal;
  line-height: 25px;
  letter-spacing: -0.234375px;
  text-align: left;
  color: ${({ active }) => (active ? '#000' : '#9597a5')};
  outline: none;
`
