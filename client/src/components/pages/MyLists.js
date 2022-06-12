import React, { Fragment,useContext,useEffect } from 'react';
import Lists from '../list/Lists';
import ListContext from '../../context/list/listContext';

const MyLists = () => {
    // Initialize and destructure context
    const listContext = useContext(ListContext);
    const { getLists, lists } = listContext;
    
    // Retrieve public lists
    useEffect(() => {
      getLists();
    }, []);
  return (
    <Fragment>
        <Lists listGroup='My Lists'/>
    </Fragment>
  )
}

export default MyLists