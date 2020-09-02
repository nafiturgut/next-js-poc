import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileFunc from '../lib/imagePost';
import styles from '../styles/layout.module.css'



export default function SingleLineGridList() {
  //const tileData = tileFunc()


  const tileData = [
    {
      img: '/images/bjk.png', author: "kartal", title: "bjk",
    },
    {
      img: '/images/nafi.jpg', author: "nat", title: "nafi",
    },

  ];
  return (
    <div className={styles.root}>
      <GridList className={styles.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: styles.titleBar,
                title: styles.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={styles.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
