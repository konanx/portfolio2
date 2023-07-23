import { Box, Stack, Paper, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const SingleSkill = ({ ...props }) => {
  return (
    <Grid
      xs={12}
      lg={4}
    >
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography variant="h5">{props?.name}</Typography>
      </Paper>
    </Grid>
  );
};

export const Skills = () => {
  const skille = [
    { name: "React" },
    { name: "Node" },
    { name: "Typescript" },
    { name: "Socket.io" },
    { name: "API" },
    { name: "MYSQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "Material UI" },
    { name: "Bootstrap" },
    { name: "GIT" },
    { name: "ES6" },
  ];
  return (
    <>
      <Typography
        mt={6}
        mb={2}
        variant="h4"
        textAlign="center"
        fontFamily="Montserrat"
        id="skills"
      >
        Umiejętności
      </Typography>
      <Grid
        container
        spacing={1}
      >
        {skille.map((skill) => {
          return <SingleSkill {...skill} />;
        })}
      </Grid>
      <Typography
        mt={1}
        variant="subtitle2"
        textAlign="center"
      >
        i wiele więcej...
      </Typography>
    </>
  );
};
