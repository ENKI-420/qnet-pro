package dev.dnalang.mobile.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val DarkColorScheme = darkColorScheme(
    primary = Color(0xFFA78BFA),
    secondary = Color(0xFF818CF8),
    tertiary = Color(0xFF60A5FA),
    background = Color(0xFF0A0A0A),
    surface = Color(0xFF141414),
    surfaceVariant = Color(0xFF1F1F1F),
    onPrimary = Color(0xFF0A0A0A),
    onSecondary = Color(0xFF0A0A0A),
    onTertiary = Color(0xFF0A0A0A),
    onBackground = Color(0xFFF5F5F5),
    onSurface = Color(0xFFF5F5F5),
)

private val LightColorScheme = lightColorScheme(
    primary = Color(0xFF7C3AED),
    secondary = Color(0xFF6366F1),
    tertiary = Color(0xFF3B82F6),
    background = Color(0xFFFAFAFA),
    surface = Color(0xFFFFFFFF),
    surfaceVariant = Color(0xFFF5F5F5),
    onPrimary = Color(0xFFFFFFFF),
    onSecondary = Color(0xFFFFFFFF),
    onTertiary = Color(0xFFFFFFFF),
    onBackground = Color(0xFF0A0A0A),
    onSurface = Color(0xFF0A0A0A),
)

@Composable
fun DNALangTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
    val view = LocalView.current
    
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.surface.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
