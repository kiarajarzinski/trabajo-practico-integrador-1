import { Article } from '../models/article.model.js';

//si el usuario no es admin buscamos el articulo para saber el id de user
export const ownerMiddleware = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      return next();
    }
    const article = await Article.findByPk(req.params.id);

    if (!article) {
      return res.status(404).json({
        message: 'Artículo no encontrado.',
      });
    }

    // verifica que sea dueño del articulo comparando ids
    if (article.user_id !== req.user.id) {
      return res.status(403).json({
        message: 'Acceso denegado. No eres dueño de este artículo.',
      });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error interno del servidor.', error
    });
  }
};