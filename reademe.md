# 🖋 Writikal

![Writikal Banner](public/banner.png)

Writikal es un copiloto de escritura creativa impulsado por IA que ayuda a escritores a superar el bloqueo creativo, desarrollar personajes memorables y dar forma a sus historias utilizando la API de Anthropic.

## 🚀 Características

- 📝 **Superación del Bloqueo Creativo**: Obtén sugerencias personalizadas para superar el bloqueo del escritor
- 👥 **Desarrollo de Personajes**: Crea personajes profundos y memorables con nuestra herramienta especializada
- 📖 **Estructuración de Historias**: Da forma a tus narrativas con guías y sugerencias inteligentes
- 🧠 **Lluvia de Ideas**: Genera y explora nuevas ideas para tus historias
- 📚 **Desarrollo de Tramas**: Construye tramas convincentes con análisis y sugerencias detalladas

## 🛠️ Tecnologías Utilizadas

### Frontend
- React.js
- TailwindCSS
- Lucide Icons
- TypeScript

### Backend
- FastAPI
- Anthropic API (Claude)
- Python 3.8+
- Pydantic

## 📋 Prerrequisitos

- Python 3.8 o superior
- Node.js 18.0 o superior
- Una clave API de Anthropic
- Git

## ⚙️ Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/holasoymalva/writikal.git
cd writikal
```

### 2. Configurar el Backend

```bash
# Crear y activar entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
cd backend
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Edita .env y agrega tu ANTHROPIC_API_KEY
```

### 3. Configurar el Frontend

```bash
# Instalar dependencias
cd frontend
npm install

# Configurar variables de entorno
cp .env.example .env.local
```

## 🚀 Ejecutar el Proyecto

### Iniciar el Backend

```bash
cd backend
uvicorn main:app --reload
```

### Iniciar el Frontend

```bash
cd frontend
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
writikal/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
└── README.md
```

## 📦 API Endpoints

### Creative Assist
```http
POST /api/creative-assist
```
Parámetros:
```json
{
  "prompt": "string",
  "context": "string",
  "type": "unblock | character | story | brainstorm | plot"
}
```

### Character Development
```http
POST /api/character-development
```
Parámetros:
```json
{
  "character_info": {
    "name": "string",
    "description": "string",
    "background": "string",
    "goals": ["string"],
    "traits": ["string"]
  }
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles

## 📬 Contacto

Malva - [@holasoymalva](https://twitter.com/holasoymalva) 

Link del Proyecto: [https://github.com/holasoymalva/writikal](https://github.com/holasoymalva/writikal)

## 🙏 Agradecimientos

- [Anthropic](https://www.anthropic.com/) por su increíble API Claude
- [FastAPI](https://fastapi.tiangolo.com/) por el excelente framework
- [TailwindCSS](https://tailwindcss.com/) por el sistema de diseño
- [Lucide](https://lucide.dev/) por los íconos

---
Hecho con ❤️ por [Malva](https://github.com/holasoymalva)