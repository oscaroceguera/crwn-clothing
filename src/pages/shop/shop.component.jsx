import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetchinng } from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount () {
    const { fetchCollectionsStartAsync  } = this.props;
    fetchCollectionsStartAsync()
  }

  render () {
    const { match, isCollectionFEtching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFEtching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={props => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFEtching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFEtching: selectIsCollectionFetchinng
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
