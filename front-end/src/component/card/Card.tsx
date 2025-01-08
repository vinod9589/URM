import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
interface BasicCardProps {
  title: string;
  historyCount: number;
  backgroundColor: string;
  iconColor: string;
  buttonText: string;
  icon: React.ElementType<SvgIconProps>;
  background?: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
  title,
  historyCount,
  backgroundColor,
  iconColor,
  buttonText,
  icon: Icon,
  background,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ borderRadius: "15px", marginTop: "30px" }}>
        <CardContent>
          <Box sx={{ textAlign: "end" }}>
            <Typography>{title}</Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              {historyCount}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            backgroundColor: backgroundColor,
            minWidth: "60px",
            minHeight: "60px",
            position: "absolute",
            top: -17,
            left: 20,
            borderRadius: "10px",
            background: background,
            opacity: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "rgb(255, 255, 255);",
            boxShadow:
              " inset rgba(0, 0, 0, 0.14) -20rem 19rem 12rem 0rem,rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
          }}
        >
          <Icon sx={{ color: iconColor }} />
        </Box>
        <CardActions>
          <Button size="small">{buttonText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BasicCard;
