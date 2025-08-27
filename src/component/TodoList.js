import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

function TodoList() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "90%",
        display: "grid",
        gridTemplateAreas: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
        alignContent: "center",
        margin: "0 auto",
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id} >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              backgroundColor: "#68aaecff",
              border: selectedCard === index ? "2px solid lightblue" : "none",
              padding: selectedCard === index ? "8px 0 " : "0",
            }}
          >
            <CardContent sx={{ height: "100%" , color: "#ffffffff", }}>
              <Grid container spacing={2}>
                <Grid item size={8}>
                  <Typography variant="h5" component="h1">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.white">
                    {card.description}
                  </Typography>
                </Grid>
                <Grid item size={4}>
                  <Stack direction="row" spacing={1}>
                    <IconButton sx={{ backgroundColor: "#ffffffff",color:'red',  ":hover": { backgroundColor: "lightgray" } }} aria-label="delete" onClick={() => console.log("Delete", card.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: "#ffffffff", color: 'blue', ":hover": { backgroundColor: "lightgray" } }} aria-label="edit" onClick={() => console.log("Edit", card.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: "#ffffffff", color: 'green', ":hover": { backgroundColor: "lightgray" } }} aria-label="check" onClick={() => console.log("Check", card.id)}>
                      <CheckIcon />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default TodoList;
