import { Chat, Message, Friend } from './types';

export const MOCK_CHATS: Chat[] = [
  {
    id: '1',
    name: 'Elena Vance',
    avatar: 'https://picsum.photos/seed/elena/200',
    lastMessage: '你看过最新的编辑布局了吗？非常棒！',
    time: '下午 2:45',
    unreadCount: 3,
    online: true,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar: 'https://picsum.photos/seed/marcus/200',
    lastMessage: '账本已经更新了，请查阅。',
    time: '昨天',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    avatar: 'https://picsum.photos/seed/sarah/200',
    lastMessage: '我们可以把明天的同步会改到下午4点吗？',
    time: '周一',
    unreadCount: 1,
  },
  {
    id: '4',
    name: '设计小组',
    avatar: '',
    lastMessage: 'Julian: 发送了一张照片',
    time: '周日',
    unreadCount: 0,
    isGroup: true,
  },
  {
    id: '5',
    name: 'Robert Fox',
    avatar: 'https://picsum.photos/seed/robert/200',
    lastMessage: '演示非常成功，大家辛苦了。',
    time: '10月12日',
    unreadCount: 0,
  },
  {
    id: '6',
    name: 'Aaliyah Wright',
    avatar: 'https://picsum.photos/seed/aaliyah/200',
    lastMessage: '语音消息 (0:42)',
    time: '10月10日',
    unreadCount: 0,
  },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    text: '嘿！你看了这个项目最新的排版设计了吗？“活页账本”的概念在移动端看起来棒极了。',
    time: '上午 10:42',
    isOutgoing: false,
  },
  {
    id: '2',
    text: '我刚看到了！这种“柔性结构主义”的方法让层级变得清晰多了，而且没有那些杂乱的边框。',
    time: '上午 10:45',
    isOutgoing: true,
    status: 'read',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/design/800/600',
    text: '这是我想用于毛玻璃模糊背景的纹理。你觉得怎么样？',
    time: '上午 10:46',
    isOutgoing: false,
  },
  {
    id: '4',
    text: '完美。我们就把它用在顶部栏吧。🌿',
    time: '上午 10:48',
    isOutgoing: true,
    status: 'read',
  },
  {
    id: '5',
    audio: 'blob:audio-data',
    duration: '0:14',
    time: '上午 10:50',
    isOutgoing: false,
  },
];

export const MOCK_FRIENDS: Friend[] = [
  { id: '1', name: 'Aaliyah Wright', avatar: 'https://picsum.photos/seed/aaliyah/200', status: 'Life is a journey', initial: 'A' },
  { id: '2', name: '陈小明', avatar: 'https://picsum.photos/seed/chen/200', status: '在忙', initial: 'C' },
  { id: '3', name: 'Elena Vance', avatar: 'https://picsum.photos/seed/elena/200', status: 'Online', initial: 'E' },
  { id: '4', name: '林静', avatar: 'https://picsum.photos/seed/lin/200', status: '岁月静好', initial: 'L' },
  { id: '5', name: 'Marcus Chen', avatar: 'https://picsum.photos/seed/marcus/200', status: 'Working hard', initial: 'M' },
  { id: '6', name: 'Robert Fox', avatar: 'https://picsum.photos/seed/robert/200', status: 'Success!', initial: 'R' },
  { id: '7', name: 'Sarah Jenkins', avatar: 'https://picsum.photos/seed/sarah/200', status: 'Available', initial: 'S' },
  { id: '8', name: '王大为', avatar: 'https://picsum.photos/seed/wang/200', status: '勇往直前', initial: 'W' },
  { id: '9', name: '张伟', avatar: 'https://picsum.photos/seed/zhang/200', status: 'Hello!', initial: 'Z' },
];
