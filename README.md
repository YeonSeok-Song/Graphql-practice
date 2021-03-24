# Graphql-practice
Create movie API with Graphql
schema.graphql
//사용자가 뭘 할지에 대해 정의하는 곳.
//데이터베이스로 부터 정보를 얻는 것.
//쿼리=> 데이터 조회 와 변형=>데이터 변경
//여기에 모든 쿼리를 넣는다. 사용자에게 정보를 주는 모든것

type Mutation{

}

type Query{
    name: String!
}