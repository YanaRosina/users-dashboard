import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  ThemeProvider,
  CssBaseline,
  Alert,
  Snackbar,
} from "@mui/material";
import { SearchBar } from "./components/common/SearchBar/SearchBar";
import { UsersList } from "./components/UsersList/UsersList";
import { UserModal } from "./components/UserModal/UserModal";
import {
  fetchUsers,
  setSearchTerm,
  clearError,
} from "./store/slices/usersSlice";
import { RootState, AppDispatch } from "./store";
import { User } from "./types/user";
import { useDebounce } from "./hooks/useDebounce";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error, searchTerm } = useSelector(
    (state: RootState) => state.users
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Загружаем пользователей при изменении поискового запроса
  useEffect(() => {
    dispatch(fetchUsers(debouncedSearchTerm || undefined));
  }, [dispatch, debouncedSearchTerm]);

  // Показываем ошибку в снекбаре
  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const handleSearchChange = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleErrorClose = () => {
    setShowError(false);
    dispatch(clearError());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </Box>

        <UsersList
          users={users}
          loading={loading}
          error={error}
          onUserClick={handleUserClick}
        />

        <UserModal
          user={selectedUser}
          open={isModalOpen}
          onClose={handleModalClose}
        />

        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={handleErrorClose}
        >
          <Alert
            onClose={handleErrorClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default App;
