import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatListPage from './pages/ChatListPage';
import ChatConversationPage from './pages/ChatConversationPage';
import SettingsPage from './pages/SettingsPage';
import PrivacySettingsPage from './pages/PrivacySettingsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import AvatarSettingsPage from './pages/AvatarSettingsPage';
import ChatSettingsPage from './pages/ChatSettingsPage';
import NotificationSettingsPage from './pages/NotificationSettingsPage';
import StorageSettingsPage from './pages/StorageSettingsPage';
import InviteFriendsPage from './pages/InviteFriendsPage';
import FriendsPage from './pages/FriendsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chats" element={<ChatListPage />} />
        <Route path="/chat/:id" element={<ChatConversationPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/account" element={<AccountSettingsPage />} />
        <Route path="/avatar" element={<AvatarSettingsPage />} />
        <Route path="/chats-settings" element={<ChatSettingsPage />} />
        <Route path="/notifications" element={<NotificationSettingsPage />} />
        <Route path="/storage" element={<StorageSettingsPage />} />
        <Route path="/privacy" element={<PrivacySettingsPage />} />
        <Route path="/invite" element={<InviteFriendsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
