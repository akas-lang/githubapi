    <Grid container spacing={6}>

<Grid item>    
<Card sx={cardstyles}>
<CardContent>
<img src={element.avatar_url} className='img1'/>
<h3 className='name'>{element.login}</h3>

</CardContent>
<CardActions sx={butstyle}>
  <Button size="small" variant='contained'>Share</Button>
  <Button size="small" variant='contained'>Learn More</Button>
</CardActions>

</Card>  </Grid>


})

}
</Grid>