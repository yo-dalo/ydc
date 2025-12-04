

# Folder structure bana rahe hain
mkdir -p src/controllers/achievements
mkdir -p src/services/achievements
mkdir -p src/routes/achievements

# Controller
cat > src/controllers/achievements/AchievementController.js << 'EOL'
import AchievementService from '../services/achievements/AchievementService.js';

class AchievementController {
  static async getAll(req, res) {
    try {
      const achievements = await AchievementService.getAll();
      res.status(200).json({ success: true, data: achievements });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const achievement = await AchievementService.getById(id);
      if (!achievement) {
        return res.status(404).json({ success: false, message: 'Achievement not found' });
      }
      res.status(200).json({ success: true, data: achievement });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async getForUpdate(req, res) {
    try {
      const { id } = req.params;
      const achievement = await AchievementService.getById(id);
      if (!achievement) {
        return res.status(404).json({ success: false, message: 'Achievement not found' });
      }
      res.status(200).json({ success: true, data: achievement });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;
      const achievement = await AchievementService.create(data);
      res.status(201).json({ success: true, data: achievement });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const achievement = await AchievementService.update(id, data);
      if (!achievement) {
        return res.status(404).json({ success: false, message: 'Achievement not found' });
      }
      res.status(200).json({ success: true, data: achievement });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await AchievementService.delete(id);
      if (!result) {
        return res.status(404).json({ success: false, message: 'Achievement not found' });
      }
      res.status(200).json({ success: true, message: 'Achievement deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default AchievementController;
EOL

# Service
cat > src/services/achievements/AchievementService.js << 'EOL'
import { Achievement } from '../../models/index.js';

class AchievementService {
  static async getAll() {
    return await Achievement.findAll({
      where: { Is_Active: 'active' },
      order: [['Index_No', 'ASC'], ['Created_At', 'DESC']]
    });
  }

  static async getById(id) {
    return await Achievement.findOne({
      where: { Id: id }
    });
  }

  static async create(data) {
    return await Achievement.create(data);
  }

  static async update(id, data) {
    const achievement = await Achievement.findByPk(id);
    if (!achievement) return null;
    await achievement.update(data);
    return achievement;
  }

  static async delete(id) {
    const achievement = await Achievement.findByPk(id);
    if (!achievement) return null;
    await achievement.destroy();
    return true;
  }
}

export default AchievementService;
EOL

# Router
cat > src/routes/achievements/achievementRoutes.js << 'EOL'
import { Router } from 'express';
import AchievementController from '../controllers/achievements/AchievementController.js';

const router = Router();

// GET Routes
router.get('/', AchievementController.getAll);
router.get('/:id', AchievementController.getById);
router.get('/:id/edit', AchievementController.getForUpdate);

// POST, PUT, DELETE
router.post('/', AchievementController.create);
router.put('/:id', AchievementController.update);
router.delete('/:id', AchievementController.delete);

export default router;
EOL

echo "✅ Achievements ke saare files ban gaye (Controller, Service, Router)"
echo "   Ab tu src/routes/index.js me ye line add kar de:"
echo ""
echo "   import achievementRoutes from './achievements/achievementRoutes.js';"
echo "   app.use('/api/achievements', achievementRoutes);"
echo ""
EOF

