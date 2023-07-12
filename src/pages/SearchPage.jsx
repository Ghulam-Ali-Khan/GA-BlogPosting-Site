import React from "react";
import SearchResults from "../components/SearchResults";
import SearchSidebar from "../components/SearchSidebar";

const SearchPage = () => {
  return (
    <>
      <div class="archive-header pt-50">
        <div class="container">
          <h2 class="font-weight-900">Search results</h2>
          <div class="breadcrumb">
            We found 22 articles for <strong>"Media" </strong> key word
          </div>
          <div class="bt-1 border-color-1 mt-30 mb-50"></div>
        </div>
      </div>

      <div class="pb-50">
            <div class="container">
                <div class="row">
                    <SearchResults/>
                    <SearchSidebar/>
                    
                </div>
            </div>
        </div>
    </>
  );
};

export default SearchPage;
