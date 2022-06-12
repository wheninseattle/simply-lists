import React, { Fragment,useContext,useEffect } from 'react';
import Lists from '../list/Lists';
import ListContext from '../../context/list/listContext';

const MyLists = () => {
    // Initialize and destructure context
    const listContext = useContext(ListContext);
    const { getLists, lists, clearCurrentList } = listContext;
    
    // Retrieve public lists
    useEffect(() => {
      getLists();
      clearCurrentList();
    }, []);
  return (
    <Fragment>
        <Lists listGroup='My Lists'/>
    </Fragment>
  )
}

export default MyLists