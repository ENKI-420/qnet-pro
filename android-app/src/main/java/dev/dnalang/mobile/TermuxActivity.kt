package dev.dnalang.mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
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

class TermuxActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DNALangTheme {
                TermuxScreen(onBack = { finish() })
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TermuxScreen(onBack: () -> Unit) {
    var command by remember { mutableStateOf("") }
    var terminalOutput by remember { mutableStateOf("DNALang Termux Integration v1.0.0\nType 'help' for available commands\n\n$ ") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Termux Integration") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    IconButton(onClick = { terminalOutput = "$ " }) {
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
            // Terminal Output
            Card(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .padding(8.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Text(
                    text = terminalOutput,
                    fontFamily = FontFamily.Monospace,
                    fontSize = 12.sp,
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(12.dp)
                        .verticalScroll(rememberScrollState())
                )
            }

            // Command Input
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                TextField(
                    value = command,
                    onValueChange = { command = it },
                    modifier = Modifier.weight(1f),
                    placeholder = { Text("Enter command...") },
                    textStyle = LocalTextStyle.current.copy(
                        fontFamily = FontFamily.Monospace,
                        fontSize = 13.sp
                    ),
                    singleLine = true
                )
                Button(
                    onClick = {
                        if (command.isNotEmpty()) {
                            terminalOutput += "$command\n"
                            
                            // Simulate command execution
                            terminalOutput += when (command) {
                                "help" -> "Available commands:\n  dna-compile <file>\n  dna-run <file>\n  dna-metrics\n  wgf-optimize\n  psi-assemble\n\n"
                                "dna-metrics" -> "Coherence: 0.87\nFidelity: 0.92\nConsciousness: 0.89\n\n"
                                else -> "Command not found: $command\n\n"
                            }
                            
                            terminalOutput += "$ "
                            command = ""
                        }
                    }
                ) {
                    Icon(Icons.Default.Send, contentDescription = "Execute")
                }
            }

            // Quick Commands
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 8.dp, vertical = 4.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Button(
                    onClick = { command = "dna-metrics" },
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.secondaryContainer,
                        contentColor = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                ) {
                    Text("Metrics", fontSize = 11.sp)
                }
                Button(
                    onClick = { command = "wgf-optimize" },
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.secondaryContainer,
                        contentColor = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                ) {
                    Text("W-Flow", fontSize = 11.sp)
                }
                Button(
                    onClick = { command = "help" },
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.secondaryContainer,
                        contentColor = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                ) {
                    Text("Help", fontSize = 11.sp)
                }
            }
        }
    }
}
