import React, { Fragment,useContext,useEffect } from 'react';
import Lists from '../list/Lists';
import ListContext from '../../context/list/listContext';

const MyLists = () => {
    // Initialize and destructure context
    const listContext = useContext(ListContext);
    const { getLists, lists, clearCurrentList } = listContext;
    
    // Retrieve public lists
    useEffect(() => {
      const myLists = getLists();
      console.table(myLists)
      clearCurrentList();
    }, []);

  return (
    <Fragment>
        <Lists listGroup='My Lists' lists={lists}/>
    </Fragment>
  )
}

export default MyLists