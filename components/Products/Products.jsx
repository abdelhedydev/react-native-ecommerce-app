import React from 'react';
import { Query } from 'react-apollo';
import {
  View, Text, ScrollView,
} from 'react-native';
import { map } from 'lodash';
import Card from '../Card';
import style from './ProductsStyle';
import GET_PRODUCTS from '../../graphql/querries';

class Products extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading ... </Text>;
              if (error) return `Error! ${error.message}`;
              if (error) return `<Text>${error.message}</Text>`;
              return (
                <View>
                  {map(data.products, (product, key) => (
                    <Card
                      key={key}
                      title={product.title}
                    />
                  ))}

                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}

export default Products;
