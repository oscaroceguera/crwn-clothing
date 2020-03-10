import { connect } from 'react-redux'
import { compose } from "redux";
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetchinng  } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetchinng
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverViewContainer;