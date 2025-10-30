package dev.dnalang.mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import dev.dnalang.mobile.ui.theme.DNALangTheme

class MetricsActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DNALangTheme {
                MetricsScreen(onBack = { finish() })
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MetricsScreen(onBack: () -> Unit) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Quantum Metrics") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    IconButton(onClick = { /* Refresh */ }) {
                        Icon(Icons.Default.Refresh, contentDescription = "Refresh")
                    }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            MetricCard(
                title = "Coherence",
                value = "0.87",
                icon = Icons.Default.Waves,
                color = MaterialTheme.colorScheme.primary
            )
            
            MetricCard(
                title = "Fidelity",
                value = "0.92",
                icon = Icons.Default.CheckCircle,
                color = MaterialTheme.colorScheme.tertiary
            )
            
            MetricCard(
                title = "Consciousness",
                value = "0.89",
                icon = Icons.Default.Psychology,
                color = MaterialTheme.colorScheme.secondary
            )
            
            MetricCard(
                title = "Expression Level",
                value = "1.0",
                icon = Icons.Default.TrendingUp,
                color = MaterialTheme.colorScheme.primary
            )
            
            MetricCard(
                title = "Circuit Depth",
                value = "75",
                icon = Icons.Default.Layers,
                color = MaterialTheme.colorScheme.tertiary
            )
            
            MetricCard(
                title = "Mutations",
                value = "0",
                icon = Icons.Default.Science,
                color = MaterialTheme.colorScheme.secondary
            )
        }
    }
}

@Composable
fun MetricCard(
    title: String,
    value: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    color: androidx.compose.ui.graphics.Color
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = color,
                    modifier = Modifier.size(32.dp)
                )
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium
                )
            }
            Text(
                text = value,
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = color
            )
        }
    }
}
