import React from "react";
import { Typography, Box, Alert, Grid } from "@mui/material";
import { UserCard } from "../UserCard/UserCard";
import { LoadingSpinner } from "../common/LoadingSpinner/LoadingSpinner";
import { User } from "../../types/user";

interface UsersListProps {
  users: User[];
  loading: boolean;
  error: string | null;
  onUserClick: (user: User) => void;
}

export const UsersList: React.FC<UsersListProps> = ({
  users,
  loading,
  error,
  onUserClick,
}) => {
  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <Box sx={{ mt: 2 }}>
        <Alert severity="error">Ошибка загрузки пользователей: {error}</Alert>
      </Box>
    );

  if (users.length === 0)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <Typography variant="h6" color="text.secondary">
          Пользователи не найдены
        </Typography>
      </Box>
    );

  return (
    <Grid container spacing={3} justifyContent="center">
      {users.map((user) => (
        <Grid
          key={user.id}
          size={{ xs: 12, sm: 6, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "357px",
            minHeight: "314px",
          }}
        >
          <UserCard user={user} onClick={onUserClick} />
        </Grid>
      ))}
    </Grid>
  );
};
