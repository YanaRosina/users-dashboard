import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { MailOutline, PhoneAndroid } from "@mui/icons-material";
import { User } from "../../types/user";

interface UserCardProps {
  user: User;
  onClick: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <Card
      onClick={() => onClick(user)}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom noWrap pb={2}>
          {user.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <PhoneAndroid className="card-icon" sx={{ mr: 1, fontSize: 35 }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {user.phone}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <MailOutline className="card-icon" sx={{ mr: 1, fontSize: 35 }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
