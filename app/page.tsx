import LikeButton from "@/components/LikeButton";

// דף הבית של האתר (הכתובת /).
// כל קובץ page.tsx בתוך התיקייה app הוא דף באתר.

export default function Home() {
  return (
    <main className="page">
      {/* הכותרת הראשית: כאן כותבים את השם */}
      <h1>היי, אני נועה</h1>

      {/* משפט קצר עליי */}
      <p className="intro">אני אוהבת לצלם ולטייל, ובקורס הזה אני בונה את האתר הראשון שלי.</p>

      {/* כאן משתמשים ברכיב הכפתור, שנמצא בתיקייה components */}
      <LikeButton />
    </main>
  );
}
