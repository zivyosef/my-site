"use client";
// השורה למעלה אומרת ל-Next.js שהרכיב הזה רץ בדפדפן,
// כי יש בו משהו שקורה כשלוחצים.

// רכיב (component): חלק באתר שאפשר להשתמש בו שוב ושוב, בכל דף.
// הרכיב הזה הוא כפתור, ומה שקורה כשלוחצים עליו.

export default function LikeButton() {
  return (
    <button className="like-button" onClick={() => alert("שמחה שבאת!")}>
      לחצו עליי
    </button>
  );
}
