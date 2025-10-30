package dev.dnalang.mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import dev.dnalang.mobile.ui.theme.DNALangTheme

class EditorActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DNALangTheme {
                EditorScreen(onBack = { finish() })
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditorScreen(onBack: () -> Unit) {
    var code by remember { 
        mutableStateOf("""ORGANISM QuantumExample
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
  }

  GENOME {
    GENE TestGene {
      purpose: "Quantum operations"
      expression_level: 1.0
    }
  }

  AGENTS {
    executor: QuantumAgent(
      backend: "simulator"
    )
  }
}""") 
    }
    var output by remember { mutableStateOf("") }
    var isRunning by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Code Editor") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    IconButton(onClick = { 
                        isRunning = true
                        // Simulate execution
                        output = "Compiling...\nExecuting...\n\nSuccess!\nCoherence: 0.87\nFidelity: 0.92"
                        isRunning = false
                    }) {
                        Icon(Icons.Default.PlayArrow, contentDescription = "Run")
                    }
                    IconButton(onClick = { code = "" }) {
                        Icon(Icons.Default.Clear, contentDescription = "Clear")
                    }
                }
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
        ) {
            // Code Editor
            Card(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .padding(8.dp)
            ) {
                TextField(
                    value = code,
                    onValueChange = { code = it },
                    modifier = Modifier
                        .fillMaxSize()
                        .verticalScroll(rememberScrollState()),
                    textStyle = LocalTextStyle.current.copy(
                        fontFamily = FontFamily.Monospace,
                        fontSize = 12.sp
                    ),
                    colors = TextFieldDefaults.colors(
                        focusedContainerColor = MaterialTheme.colorScheme.surface,
                        unfocusedContainerColor = MaterialTheme.colorScheme.surface,
                        focusedIndicatorColor = MaterialTheme.colorScheme.primary,
                        unfocusedIndicatorColor = MaterialTheme.colorScheme.outline
                    )
                )
            }

            // Output Panel
            Card(
                modifier = Modifier
                    .weight(0.5f)
                    .fillMaxWidth()
                    .padding(8.dp)
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(12.dp)
                ) {
                    Text(
                        text = "Output",
                        style = MaterialTheme.typography.titleSmall
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = output.ifEmpty { "Run your code to see output..." },
                        fontFamily = FontFamily.Monospace,
                        fontSize = 11.sp,
                        color = if (output.isEmpty()) 
                            MaterialTheme.colorScheme.onSurface.copy(alpha = 0.5f)
                        else 
                            MaterialTheme.colorScheme.onSurface,
                        modifier = Modifier.verticalScroll(rememberScrollState())
                    )
                }
            }
        }
    }
}
