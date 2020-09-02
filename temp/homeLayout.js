<Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={classes.root}>

      <Grid container spacing={3}>
     
      <Grid item xs={10}>
          <Paper >

          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <SelectList data={data2} />

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <SimpleLineChart data={data} />

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
      <section className={utilStyles.headingMd}>

        <p>Nayonun websitesi</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our </a> Next.js tutorial.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <Date dateString={date} />
      <span>
        sadfşkdslfafsdlfasdmflasdfşlasdsdfadsfasadfasdlvkmdsklcmkdsc
      </span>
      <Button variant="contained" color="primary">
      Hello World
     </Button>
      
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]"as={`/posts/${id}`}>
             <a>{title} </a> 
              </Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>

            </li>
          ))}
        </ul>
      </section>
    </Layout>