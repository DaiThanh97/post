import app from './app';
import { PORT } from './constants/env';

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));