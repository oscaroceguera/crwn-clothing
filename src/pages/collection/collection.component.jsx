import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  console.log("TCL: CollectionPage -> collection", collection);
  return (
    <div className="collection">
      <h2>collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
