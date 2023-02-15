import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import ActorCard from "./ActorCard";

const SectionCast = ({ data, Title }) => {
  const dataActors = data.filter((actorData) => actorData.profile_path);

  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#f9f9f9", margin: "4px", marginTop:"16px"}}>
        {Title}
      </Typography>
      <ContainerSectionList container sx={{}} spacing={3}>
        {dataActors.map((item) => {
          return (
            <Grid item>
              <ActorCard item={item} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </ContainerSectionPreview>
  );
};

export default SectionCast;
